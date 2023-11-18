package com.example.gamja_thon.service;

import com.example.gamja_thon.dto.PointDto;
import com.example.gamja_thon.entity.PointEntity;
import com.example.gamja_thon.repository.PointRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ReportService {
	
	@Value("${naver.client.id}")
    private String clientId;

    @Value("${naver.client.secret}")
    private String clientSecret;

    @Autowired
    private PointRepository pointRepository;

    public boolean addressToSave(String address) {
    	String url = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=" + address;

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-NCP-APIGW-API-KEY-ID", clientId);
        headers.set("X-NCP-APIGW-API-KEY", clientSecret);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode items = root.path("addresses");

            if (items.isArray() && items.size() > 0) {
                JsonNode item = items.get(0);
                double x = item.get("x").asDouble();
                double y = item.get("y").asDouble();

                PointEntity pointEntity = new PointEntity();
                pointEntity.setLongitude(x);
                pointEntity.setLatitude(y);
                pointRepository.save(pointEntity);

                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return false;
    }

    public boolean locationToSave(PointDto pointDto) {
        PointEntity pointEntity = new PointEntity();
        pointEntity.setLatitude(pointDto.getLatitude());
        pointEntity.setLongitude(pointDto.getLongitude());
        
        pointRepository.save(pointEntity);
        
        return true;
    }
    
    public List<PointDto> getAllLocations() {
        return pointRepository.findAll().stream()
                .map(entity -> new PointDto(entity.getLatitude(), entity.getLongitude()))
                .collect(Collectors.toList());
    }
    
    public ArrayList<double[]> cluster(List<double[]> data, double k) {
        Set<Integer> index = new TreeSet<>();
        index.add(0);
        for(int i = 0; i < data.size(); i++){
            for(int j = i+1; j < data.size(); j++){
                double[] a = data.get(i);
                double[] b = data.get(j);
                double dist = getdistant(a, b);
                if(dist >= k){
                    index.add(j);
                }
            }
        }

        ArrayList<double[]> result = new ArrayList<double[]>();
        for(int i : index){
            result.add(data.get(i));
        }
        return result;
    }

    public double getdistant(double[] a, double[] b){
        double sum = 0;
        for(int i = 0; i < a.length; i++){
            sum += Math.pow(a[i] - b[i], 2);
        }
        return Math.sqrt(sum);
    }
    
    public List<double[]> convertToPointArray(List<PointDto> points) {
        return points.stream()
                     .map(p -> new double[]{p.getLatitude(), p.getLongitude()})
                     .collect(Collectors.toList());
    }
}

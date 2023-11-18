package com.example.gamja_thon.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gamja_thon.dto.PointDto;
import com.example.gamja_thon.dto.ReportDto;
import com.example.gamja_thon.service.ReportService;

@CrossOrigin(originPatterns="http://localhost:3000",  allowCredentials = "true")
@RequestMapping("/api/report")
@RestController
public class ReportController {
	
	@Autowired
	private ReportService reportService;
	
	@PostMapping("/address")
	public ResponseEntity<?> addressToSave(@RequestBody ReportDto reportDto){
		
		if(reportService.addressToSave(reportDto.getReportAddress()) == true) {
            return new ResponseEntity<>("성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("실패", HttpStatus.BAD_REQUEST);
        }
	}
	
	@PostMapping("/location")
	public ResponseEntity<?> locationToSave(@RequestBody PointDto pointDto){
		
		if(reportService.locationToSave(pointDto) == true) {
            return new ResponseEntity<>("성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("실패", HttpStatus.BAD_REQUEST);
        }
	}
	
	@GetMapping("/union")
	public ResponseEntity<List<PointDto>> union() {
	    List<PointDto> pointDtos = reportService.getAllLocations();
	    List<double[]> rawData = reportService.convertToPointArray(pointDtos);
	    
	    ArrayList<double[]> clusteredData = reportService.cluster(rawData, 0.001);

	    List<PointDto> result = clusteredData.stream()
	        .map(point -> new PointDto(point[0], point[1]))
	        .collect(Collectors.toList());

	    return ResponseEntity.ok(result);
	}
	
	@GetMapping("getAllLocations")
	public ResponseEntity<List<PointDto>> getAllLocations(){
		List<PointDto> pointDtos = reportService.getAllLocations();
		return ResponseEntity.ok(pointDtos);
	}
}

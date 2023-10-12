package breakfast.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import breakfast.dtos.BreakFastRequestDTO;
import breakfast.dtos.BreakFastResponseDTO;
import breakfast.entities.MappingResponse;
import breakfast.services.BreakFastItemService;
import breakfast.services.BreakFastService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/breakfast")
public class BreakFastController {

  private BreakFastService breakFastService;
  private BreakFastItemService breakFastItemService;

  public BreakFastController(BreakFastService breakFastService, BreakFastItemService breakFastItemService) {
    this.breakFastService = breakFastService;
    this.breakFastItemService = breakFastItemService;
  }

  @GetMapping
  public ResponseEntity<List<BreakFastResponseDTO>> findAll() {
    var breakFasts = breakFastService.findAll()
        .stream()
        .map(MappingResponse::fromBreakFastToResponse)
        .collect(Collectors.toList());

    return ResponseEntity.ok().body(breakFasts);
  }

  @GetMapping("/date")
  public ResponseEntity<List<BreakFastResponseDTO>> findAllByDate(@RequestParam("date") String date) {
    LocalDate dateFormat = LocalDate.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

    List<BreakFastResponseDTO> breakFastsItems = breakFastItemService.findAllByDate(dateFormat)
        .stream()
        .map(MappingResponse::fromBreakFastToResponse)
        .collect(Collectors.toList());

    return ResponseEntity.ok().body(breakFastsItems);
  }

  @PostMapping
  public ResponseEntity<List<BreakFastResponseDTO>> add(@RequestBody BreakFastRequestDTO data) {
    List<BreakFastResponseDTO> breakFasts = breakFastService.addBreakFast(data)
        .stream()
        .map(MappingResponse::fromBreakFastToResponse)
        .collect(Collectors.toList());

    return ResponseEntity.ok().body(breakFasts);
  }

}

package breakfast.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.stereotype.Service;

import breakfast.dtos.BreakFastRequestDTO;
import breakfast.entities.BreakFast;
import breakfast.entities.BreakFastItem;
import breakfast.repositories.BreakFastRepository;

@Service
public class BreakFastService {

  private BreakFastRepository breakFastRepository;

  private BreakFastItemService breakFastItemService;

  BreakFastService(BreakFastRepository breakFastRepository, BreakFastItemService breakFastItemService) {
    this.breakFastRepository = breakFastRepository;
    this.breakFastItemService = breakFastItemService;
  }

  public List<BreakFastItem> addBreakFast(BreakFastRequestDTO data) {
    LocalDate date = LocalDate.parse(data.date(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

    BreakFast breakFast = new BreakFast();

    BreakFastItem newItem = new BreakFastItem(date, data.name(), data.document());
    newItem.addFoods(data.items(), breakFastItemService.findAllByDate(date));

    breakFast.getItems().add(newItem);

    if (!this.doesDocumentExist(breakFastItemService.findAllByDate(date), data.document())) {
      breakFastRepository.save(breakFast);
    } else {
      throw new Error("Documento já cadastrado");
    }

    return this.findAll();
  }

  public boolean doesDocumentExist(List<BreakFastItem> breakFasts, String document) {
    for (BreakFastItem breakFast : breakFasts) {
      if (breakFast.getDocument().equals(document)) {
        return true;
      }
    }
    return false;
  }

  public List<BreakFastItem> findAll() {
    return breakFastItemService.findAll();
  }
}

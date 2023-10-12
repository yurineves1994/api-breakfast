package breakfast.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import breakfast.entities.BreakFastItem;
import breakfast.repositories.BreakFastItemRepository;

@Service
public class BreakFastItemService {

  private BreakFastItemRepository breakFastItemRepository;

  BreakFastItemService(BreakFastItemRepository breakFastItemRepository) {
    this.breakFastItemRepository = breakFastItemRepository;
  }

  public List<BreakFastItem> findAllByDate(LocalDate date) {
    return breakFastItemRepository.findAllByDate(date);
  }

  public List<BreakFastItem> findAll() {
    return breakFastItemRepository.findAll();
  }
}

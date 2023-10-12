package breakfast.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import breakfast.entities.BreakFastItem;

public interface BreakFastItemRepository extends JpaRepository<BreakFastItem, Long> {
  List<BreakFastItem> findAllByDate(LocalDate date);
}

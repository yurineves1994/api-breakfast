package breakfast.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import breakfast.entities.BreakFast;

public interface BreakFastRepository extends JpaRepository<BreakFast, Long> {
}

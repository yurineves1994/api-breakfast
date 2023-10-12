package breakfast.dtos;

import java.time.LocalDate;
import java.util.Set;

public record BreakFastResponseDTO(LocalDate date, String name, String document, Set<String> items) {

}

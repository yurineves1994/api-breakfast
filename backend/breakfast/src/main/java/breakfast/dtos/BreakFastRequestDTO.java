package breakfast.dtos;

import java.util.Set;

public record BreakFastRequestDTO(String date, String name, String document, Set<String> items) {
}

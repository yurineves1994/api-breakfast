package breakfast.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "breakfasts_item")
@Table(name = "breakfasts_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BreakFastItem {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Future(message = "Por favor, informe uma data futura!")
  private LocalDate date;

  @Column(nullable = false)
  @Size(message = "o seu nome deve conter entre {min} e {max} caracteres", min = 3, max = 100)
  private String name;

  @Column(nullable = false)
  @CPF(message = "Por favor, informe um CPF valido!")
  private String document;

  private Set<String> foods = new HashSet<>();

  public BreakFastItem(LocalDate date, String name, String document) {
    this.date = date;
    this.name = name;
    this.document = document;
  }

  public void addFoods(Set<String> newFoods, List<BreakFastItem> existingItems) {
    if (foods == null) {
      foods = new HashSet<>();
    }

    for (String food : newFoods) {
      if (!isFoodAlreadyTaken(food, existingItems)) {
        foods.add(food);
      } else {
        throw new Error("Um ou Mais alimentos inseridos já foram inseridos por outro funcionario!");
      }
    }
  }

  private boolean isFoodAlreadyTaken(String food, List<BreakFastItem> existingItems) {
    for (BreakFastItem item : existingItems) {
      if (item != this && item.getFoods() != null && item.getFoods().contains(food)) {
        return true;
      }
    }
    return false;
  }
}

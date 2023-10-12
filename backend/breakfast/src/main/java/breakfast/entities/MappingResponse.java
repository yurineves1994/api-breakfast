package breakfast.entities;

import breakfast.dtos.BreakFastResponseDTO;

public class MappingResponse {

  public static BreakFastResponseDTO fromBreakFastToResponse(BreakFastItem item){
    return new BreakFastResponseDTO(item.getDate(), item.getName(), item.getDocument(), item.getFoods());
  }
  
}

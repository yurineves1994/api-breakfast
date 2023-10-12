package breakfast.entities.enums;

public enum Food {
  MAÇA("Maçã"),
  BANANA("Banana"),
  LARANJA("Laranja"),
  UVA("Uva"),
  QUEIJO("Queijo"),
  OVOS("Ovos"),
  PÃO("Pão"),
  IOGURTE("Iogurte"),
  CEREAL("Cereal"),
  CAFÉ("Café");

  private final String nome;

  Food(String nome) {
    this.nome = nome;
  }

  public String getNome() {
    return nome;
  }

}
class Item {
  constructor(
    id,
    categoryIds,
    title,
    price,
    imageUrl,
    material,
    ingredients,
    washingInstructions,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.washingInstructions = washingInstructions;
    this.material = material;
    this.price = price;
  }
}

export default Item;

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


//Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
//
// Category has many Product models.
//
// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and
// tags to have many products.
//
// Tag belongs to many Product models.


// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id'
})

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:ProductTag,
  as:'product_tags',
  foreignKey:'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:ProductTag,
  as:'product_tags',
  foreignKey:'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

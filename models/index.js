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
//TODO
Product.belongsTo(Category,{
  foreignKey:'temp'
})

// Categories have many Products

//TODO
Category.hasMany(Product,{
  foreignKey:'temp'
})

// Products belongToMany Tags (through ProductTag)
//TODO
Product.belongsToMany(Tag,{
  through:ProductTag,
  as:'temp',
  foreignKey:'temp'
})

// Tags belongToMany Products (through ProductTag)
//TODO
Tag.belongsToMany(Product,{
  through:ProductTag,
  as:'temp',
  foreignKey:'temp'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

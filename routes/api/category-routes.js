const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    Category.findAll({
        include:[
            {
                model:Product
            }
        ]
    }).then(dbCategoryData=>{
        res.json(dbCategoryData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Category.findOne({
        where:{
            id:req.params.id
        },
        include:[
            {
                model:Product
            }
        ]
    }).then(dbCategoryData=>{
        if(!dbCategoryData){
            return res.status(400).json({message:"invalid Category id"})
        }
        res.json(dbCategoryData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    Category.create({
        category_name:req.body.category_name
    }).then(dbCategoryData=>{
        res.json(dbCategoryData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    Category.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(dbCategoryData=>{
        if(!dbCategoryData){
            return res.status(400).json({message:"invalid category id"})
        }
        res.json(dbCategoryData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    Category.destroy({
        where:{
            id:req.params.id
        }
    }).then(dbCategoryData=>{
        if(!dbCategoryData){
            return res.status(400).json({message:"invalid category id"})
        }
        res.json(dbCategoryData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router;

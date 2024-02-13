const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;



app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// creating schema:
// schema validation:
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "product title is required"],
        minLength: [3, "miminum length of the product title sould be 3"],
        maxLength: [100, "maximum lenght of the product title sould be 100"],
        trim: true, // it removes unnecessary space from start and end of the sentence
        // enum: {
        //     value: ["iphone17", "samsung"],
        //     message: "{VALUE} is not supported"
        // },
        validate: {
            validator: function (v) {
                return v.length === 10
            },
            message: (props) => `${props.value} is not valied`
        }

    },
    price: {
        type: Number,
        min: [200, "minimum price of the product should be 200"],
        max: [2000, "maximum price of the product should be 2000"],
        required: true,

    },
    // email: {
    //     type: String,
    //     unique: true
    // },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model("TestProduct", productSchema)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'welcome to new server world'
    })
})


app.post('/products', async (req, res) => {
    try {

        const { title, price, description } = req.body;

        const body = {
            title,
            price,
            description
        }

        const newProduct = new Product(body)

        const result = await newProduct.save();

        res.json({
            success: true,
            message: 'data posted successfully',
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

app.get('/products', async (req, res) => {
    try {

        const query = req.query;

        const value = Object.values(query)[0];
        const key = Object.keys(query)[0]
        console.log()
        let queryData;
        if (key && value) {
            queryData = { [key]: { $lte: value } }
        } else {
            queryData = {}
        }



        // const value = Object.values(query);
        // console.log(value[0])
        // const key = Object.keys(query);
        // console.log(key[0])

        // different query: comparison operator
        // const result = await Product.find(queryData);
        // const result = await Product.find({ price: { $lt: 50000 } });
        // const result = await Product.find({ price: { $gt: 50000 } });
        // const result = await Product.find({ price: { $eq: 75000 } });
        // const result = await Product.find({ price: { $ne: 75000 } });
        // const result = await Product.find({ price: { $gte: 75000 } });
        // const result = await Product.find({ price: { $lte: 75000 } });
        // const result = await Product.find({ price: { $in: [75000, 80000, 95000] } });
        // const result = await Product.find({ price: { $nin: [75000, 95000] } });

        // logical operator:
        // const result = await Product.find({
        //     $or : [{ price: { $gt: 70000 } }, { price: { $lt: 100000 } }]
        // })
        // const result = await Product.find({
        //     $and: [{price: {$gt: price}}, {rating: {$gt: rating}}]
        // })
        // const result = await Product.find({
        //     $nor: [{price: {$gt: price}}, {rating: {$gt: rating}}]
        // })

        // sorting:
        let sortedData;
        if (key && value) {
            sortedData = { [key]: Number(value) }
            console.log(sortedData)
        } else {
            sortedData = {}
        }
        const result = await Product.find({}).sort(sortedData)

        if (result) {
            res.status(200).send(result)
        } else {
            res.status(404).send({
                message: "products not found"
            })
        }
    } catch (error) {

    }
})


app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        //1- if you use find method, it will return array but if you use findOne method, it will return object only
        // const result = await Product.find({ _id: id });
        // const result = await Product.findOne({ _id: id });

        //2- using select method after find or findOne, it will return specific selected properties according to your selection.
        // const result = await Product.findOne({ _id: id }).select({
        //     title: 1,
        //     price: 1,
        //     _id: 0
        // });

        //3- you can do same as 2 here 
        const result = await Product.findOne({ _id: id }, {
            title: 1,
            price: 1,
            _id: 0
        })

        if (result) {
            res.status(200).send(result)
        } else {
            res.status(404).send({
                message: "products not found"
            })
        }
    } catch (error) {

    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)

        // const result = await Product.deleteOne({ _id: id });
        const result = await Product.findByIdAndDelete({ _id: id });

        if (result) {
            res.status(200).json({
                success: true,
                message: 'post deleted successfully',
                result
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'post not found'
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


app.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, price, description } = req.body;

        const updateData = {
            title,
            price,
            description
        }


        const result = await Product.findByIdAndUpdate(
            { _id: id },
            {
                $set: updateData
            },
            { new: true }
        )
        if (result) {
            res.status(200).json({
                success: true,
                message: 'data is updated successfully',
                result
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'data not found for update'
            })
        }

    } catch (error) {
        res.status(500).json({
            success: true,
            message: error.message
        })
    }
})


const connectData = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/testProduct');
        console.log('database connected successfully');
    } catch (error) {
        console.log(error.message)
    }
}



app.listen(port, async () => {
    console.log(`server is connected at http://localhost:${port}`)
    await connectData();
})
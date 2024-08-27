const cityData = require('../models/cityModel');

// Add City

exports.addCity = async(req,res)=>{
    // console.log('Request received at addCity:', req.body)
    try{

        const {name,population,country,latitude,longitude} = req.body;

        const existingCity = await cityData.findOne({name});
        
        if(existingCity){
            return res.status(400).json({message:'City name must be unique'});

        }

        const newCity = new cityData({name,population,country,latitude,longitude});
        await newCity.save();

        res.status(201).json({
            message:'City added successfully',
            city : newCity
        });
 
    } catch (error){
        res.status(500).json({message:error.message});
    }
};

// Update City

exports.updateCity = async(req,res)=>{
    try {
        const cityId = req.params.id;
        const updateDate = req.body;

        const updatedCity = await cityData.findByIdAndUpdate(cityId,updateData,{new:true});

        if (!updatedCity){
            return res.status(404).json({message:'City not found'});
        }

        res.status(200).json({
            message:'City updated successfully',
            city:updatedCity
        });

    } catch (error){
        res.status(500).json({message:error.message});
    }
};


// Delete City 

exports.deleteCity = async (req,res)=>{
    try {
    const cityId = req.params.id;
    const deletedCity = await cityData.findByIdAndDelete(cityId);

    if (!deletedCity){
        return res.status(404).json({message:"City not found"});
    }

    res.status(200).json({message:"City deleted Successfully"});
    } catch (error){
        res.status(500).json({message:error.message});
    }
};

// Get Cities 

exports.getCities = async (req,res)=>{

    try{
        const {page = 1,limit = 10,sort,filter,search,projection} = req.query;

        let query = cityData.find();

        if (filter){
            const filters = JSON.parse(filter);
            query = query.find(filters);
        }

        if (search){
            query = query.find({name:{$regex:search,$options:'i'}});
        }

        if (sort){
            const sortOptions = JSON.parse(sort);
            query = query.sort(sortOptions);
        }

        if(projection){
            const fields = JSON.parse(projection);
            query = query.select(fields);
        }

        const cities = await query
        .skip((page-1)*limit)
        .limit(Number(limit));

        res.status(200).json({cities});
    }catch (error){
        res.status(500).json({message:error.message});
    }
};



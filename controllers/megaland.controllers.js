const { Property, Agent} = require("../models/megaland.models.js");


exports.addNewProperty = (req, res) => {
  try {
    if (!req.file) {
      throw { message: 'image is required' };
    }

    const propertyImage = new Property({
      property_name: req.body.property_name,
      property_description: req.body.property_description,
      property_meta_tag_title: req.body.property_meta_tag_title,
      property_owner_agent: req.body.property_owner_agent,
      property_video: req.body.property_video,
      property_type: req.body.property_type,
      property_price: req.body.property_price,
      property_category: req.body.property_category,
      property_country: req.body.property_country,
      property_region: req.body.property_region,
      property_city: req.body.property_city,
      property_local_area: req.body.property_local_area,
      property_zipcode: req.body.property_zipcode,
      property_area: req.body.property_area,
      property_bedroom: req.body.property_bedroom,
      property_bathroom: req.body.property_bathroom,
      property_room_count: req.body.property_room_count,
      property_parking_space: req.body.property_parking_space,
      property_enable: req.body.property_enable,
      property_attic: req.body.property_attic,
      property_balcony: req.body.property_balcony,
      property_deck: req.body.property_deck,
      property_fenced_yard: req.body.property_fenced_yard,
      property_fireplace: req.body.property_fireplace,
      property_frontyard: req.body.property_frontyard,
      property_gasheat: req.body.property_gasheat,
      property_gym: req.body.property_gym,
      property_lakeview: req.body.property_lakeview,
      property_pond: req.body.property_pond,
      property_pool: req.body.property_pool,
      property_recreation: req.body.property_recreation,
      property_sprinklers: req.body.property_sprinklers,
      property_storage: req.body.property_storage,
      property_washer: req.body.property_washer,
      property_winecellar: req.body.property_winecellar,
      property_airport: req.body.property_airport,
      property_busstand: req.body.property_busstand,
      property_hospital: req.body.property_hospital,
      property_patroltank: req.body.property_patroltank,
      property_railway: req.body.property_railway,
      property_shopping: req.body.property_shopping,
      property_universities: req.body.property_universities,
      image_data: req.file.buffer,
    });

    Property.addNewProperty(propertyImage, (err, result) => {
      if (err) {
        res.status(500).send({
          message: err.message || 'Internal Server Error',
        });
        return;
      }

      res.status(201).send(result); 
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || 'Bad Request',
    });
  }
};







exports.addAgent = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
  }
  

  const agent = new Agent({
    agent_id: req.body.agent_id,
    agent_name: req.body.agent_name,
    agent_image: req.body.agent_image,
    agent_description: req.body.agent_description,
    agent_position: req.body.agent_position,
    agent_email: req.body.agent_email,
    agent_address: req.body.agent_address,
    agent_contact_no: req.body.agent_contact_no,
    agent_city: req.body.agent_city,
    agent_country: req.body.agent_country,
    agent_city: req.body.agent_city,
    agent_region: req.body.agent_region,
    agent_username: req.body.agent_username,
    agent_password: req.body.agent_password,
    agent_fb: req.body.agent_fb,
    agent_x: req.body.agent_x,
    agent_insta: req.body.agent_insta,
    agent_number_of_property: req.body.agent_number_of_property || false,
  });

  Agent.addAgent(agent, (err, data) => {
    if (err) {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Property.",
      });
    }

    res.send(data);
  });
};


exports.getLatestProperty = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }
  Property.getLatestProperty((err, properties) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    }
    res.send(properties);
  });
};

exports.getAllProperty = (req, res) => {
  const page = req.params.page || 1; 
  Property.getAllProperty(page, (error, data) => {
    if (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(data);
  });
};

exports.getPropertyDetails = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }
  console.log(req.body);
  Property.getPropertyDetails(req.params.id, (err, properties) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    }
    res.send(properties);
  });
};

exports.getAgents = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }
  Agent.getAgents((err, agents) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error message",
      });
    }
    res.send(agents);
  });
};

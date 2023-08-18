import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import  reviewModel  from '../../../DB/models/review.model.js';



async function fakeReviews() {
    try {
      await mongoose.connect(
        process.env.DbConnection,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
  
      const NUM_REVIEWS = 10;
  
      for (let i = 0; i < NUM_REVIEWS; i++) {
        const story = new reviewModel({
            rating: faker.datatype.number({ min: 1, max: 5 }),
            });
        await story.save();
      }
  
      console.log('Fake REVIEWS generated and saved successfully.');
  
      await mongoose.disconnect();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fakeReviews();
  
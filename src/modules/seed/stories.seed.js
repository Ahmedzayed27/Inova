import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import  storyModel  from '../../../DB/models/story.model.js';

async function fakeStories() {
  try {
    await mongoose.connect(
      process.env.DbConnection,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const NUM_STORIES = 1000;

    for (let i = 0; i < NUM_STORIES; i++) {
      const story = new storyModel({
        title: faker.lorem.paragraph(),
        body: faker.lorem.paragraphs(),
          });
      await story.save();
    }

    console.log('Fake stories generated and saved successfully.');

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

fakeStories();

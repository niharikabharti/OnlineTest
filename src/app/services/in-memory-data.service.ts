import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

/*
 Contains example data for frontend
 */

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const questions = [
      // Quiz 1 questions
      {
        id: 1, quizID: 1, catID:1, question: "How many states are there in India?", position: 1,
        o1r: "28", o2w: "27", o3w: "29", o4w: "26",
        extra: ""
      },{
        id: 2, quizID: 1, catID:1, question: "Which city is the centre of India?", position: 2,
        o1r: "Nagpur", o2w: "Bhopal", o3w: "Delhi", o4w: "Mumbai",
        extra: ""
      },{
        id: 3, quizID: 1, catID:1, question: "How many colors are there in a rainbow?", position: 3,
        o1r: "7", o2w: "5", o3w: "6", o4w: "10",
        extra: ""
      },{
        id: 4, quizID: 1, catID:1, question: "In which direction does the sun rise?", position: 4,
        o1r: "East", o2w: "North", o3w: "South", o4w: "West",
        extra: ""
      },{
        id: 5, quizID: 1, catID:1, question: "What is a baby frog called?", position: 5,
        o1r: "Tadpole", o2w: "Fish", o3w: "Snake", o4w: "Turtle",
        extra: ""
      },
      // Quiz 2 questions
      {
        id: 6, quizID: 2, catID:1, question: "Which is the largest mammal?", position: 1,
        o1r: "Blue Whale", o2w: "Elephant", o3w: "Lion", o4w: "Tiger",
        extra: ""
      },{
        id: 7, quizID: 2, catID:1, question: "How many primary colors are there?", position: 2,
        o1r: "3", o2w: "1", o3w: "5", o4w: "6",
        extra: ""
      },{
        id: 8, quizID: 2, catID:1, question: "How many years are there in one Millenium?", position: 3,
        o1r: "1000 years", o2w: "100 years", o3w: "5 years", o4w: "10 years",
        extra: ""
      },{
        id: 9, quizID: 2, catID:1, question: "What do you call a house made of ice?", position: 4,
        o1r: "Igloo", o2w: "Hut", o3w: "Home", o4w: "Villa",
        extra: ""
      },{
        id: 10, quizID: 2, catID:1, question: "Which is the smallest continent?", position: 5,
        o1r: "Australia", o2w: "Asia", o3w: "Europe", o4w: "North America",
        extra: ""
      },
      // Quiz 3 questions
      {
        id: 11, quizID: 3, catID:1, question: "Which color symbolizes peace?", position: 1,
        o1r: "White", o2w: "Black", o3w: "Pink", o4w: "Yellow",
        extra: ""
      },{
        id: 12, quizID: 3, catID:1, question: "Which is the world's largest flower?", position: 2,
        o1r: "Rafflesia", o2w: "Rose", o3w: "Lily", o4w: "Jasmine",
        extra: ""
      },{
        id: 13, quizID: 3, catID:1, question: "Which is the largest ocean in the world?", position: 3,
        o1r: "Pacific Ocean", o2w: "Atlantic Ocean", o3w: "Arctic Ocean", o4w: "Indian Ocean",
        extra: ""
      },{
        id: 14, quizID: 3, catID:1, question: "Which animal is called King of Jungle?", position: 4,
        o1r: "Lion", o2w: "Tiger", o3w: "Cat", o4w: "Dog",
        extra: ""
      },{
        id: 15, quizID: 3, catID:1, question: "How many weeks are there in one year?", position: 5,
        o1r: "52", o2w: "26", o3w: "152", o4w: "126",
        extra: ""
      },
            // Quiz 4 questions
            {
              id: 16, quizID: 4, catID:2, question: "Quiz 4 question 1. Hello.", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 17, quizID: 4, catID:2, question: "Here is the question 2, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 3, quizID: 4, catID:2, question: "Here is the question 3, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 18, quizID: 4, catID:2, question: "Here is the question 4, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 19, quizID: 4, catID:2, question: "Here is the question 5, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },
            // Quiz 5 questions
            {
              id: 20, quizID: 5, catID:2, question: "Quiz 5 question 2?", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 21, quizID: 5, catID:2, question: "Here is the question 2 from quiz 2,, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 22, quizID: 5, catID:2, question: "Here is the question 3 from quiz 2,, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 23, quizID: 5, catID:2, question: "Here is the question 4 from quiz 2,, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 24, quizID: 5, catID:2, question: "Here is the question 5 from quiz 2,, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },
            // Quiz 6 questions
            {
              id: 25, quizID: 6, catID:2, question: "Quiz 6 question 3", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 26, quizID: 6, catID:2, question: "Here is the question 2 from quiz 3, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 27, quizID: 6, catID:2, question: "Here is the question 3 from quiz 3, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 28, quizID: 6, catID:2, question: "Here is the question 4 from quiz 3, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 29, quizID: 6, catID:2, question: "Here is the question 5 from quiz 3, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            }
    ];


    // Quizzes

    const quizzes = [
    {
      id: 1,
      catID: 1,
      name: "Category 1, Quiz 1",
      points: 0,
      completed: true
    },{
      id: 2,
      catID: 1,
      name: "Category 1, Quiz 2",
      points: 0,
      completed: false
    },{
      id: 3,
      catID: 1,
      name: "Category 1, Quiz 3",
      points: 0,
      completed: false
    },
    {
      id: 4,
      catID: 2,
      name: "Category 2, Quiz 1",
      points: 0,
      completed: false
    },{
      id: 5,
      catID: 2,
      name: "Category 2, quiz 2",
      points: 0,
      completed: false
    },{
      id: 6,
      catID: 2,
      name: "Category 2, quiz 3",
      points: 0,
      completed: false
    }
]





   // Players
   const players = [
    {
      id: 1,
      completed: []
    }
  ];


    // Categories
    const categories = [
      {
        id: 1,
        title: "Category 1"
      },
      {
        id: 2,
        title: "Category 2"
      }
    ];


    return {questions, categories, quizzes, players};
  }

}
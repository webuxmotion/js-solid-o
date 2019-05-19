import View from './View';
import choiceQuestionCreator from './choiceQuestionCreator';
import inputQuestionCreator from './inputQuestionCreator';

const questions = [
  inputQuestionCreator({
      label: 'Ваш возраст'
  }),
  choiceQuestionCreator({
      label: 'Любите ли вы фантастическую литературу?',
      choices: ['Да', 'Нет']
  }),
  choiceQuestionCreator({
      label: 'Сколько часов в неделю в среднем вы тратите на чтение художественной литературы?',
      choices: ['менее часа', '2-5 часов', '5-8 часов', '9-15 часов', 'более 15 часов']
  })
];

const view = new View;
const questionsContainer = document.getElementById('questions');

view.render(questionsContainer, questions);

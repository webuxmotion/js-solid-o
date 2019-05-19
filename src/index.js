import answerTypes from './answerTypes';
import question from './question';
import View from './View';

const questions = [
  question('Ваш возраст', answerTypes.input),
  question('Любите ли вы фантастическую литературу?', answerTypes.choice, ['Да', 'Нет']),
  question('Сколько часов в неделю в среднем вы тратите на чтение художественной литературы?', answerTypes.choice, ['менее часа', '2-5 часов', '5-8 часов', '9-15 часов', 'более 15 часов'])
];

const view = new View;
const questionsContainer = document.getElementById('questions');

view.render(questionsContainer, questions);

class View {
  
  renderQuestion(target, question) {

    const getInput = () => {

      const getOptions = () => {

        let markup = ``;

        question.choices.map(el => {
          markup += `<option value="${el}">${el}</option>`
        }); 
        
        return markup;
      }

      switch (question.answerType) {
        case 1:
          return `<input type="test">`;
          break;
        case 0:
          return `<select>${getOptions()}</select>`;
          break;
        default:
          console.log('Unnown answerType')
      }
    }

    const markup = `
      <div class="question">
        <div class="question-label">${question.label}</div>
        ${getInput()}
      </div>
    `;

    target.innerHTML += markup;
  }

  render(target, questions) {
    questions.forEach(el => {
      this.renderQuestion(target, el);
    })
  }
}

export default View;

import QuestionCreator from './QuestionCreator';

const choiceQuestionCreator = (params) => {

  const getOptions = () => {

    let markup = ``;

    params.choices.map(el => {
      markup += `<option value="${el}">${el}</option>`
    }); 
    
    return markup;
  }

  const renderInput = () => {

    const input = `
      <select>
        ${getOptions()}  
      </select>
    `;

    return input;
  }; 

  const that = new QuestionCreator(params);

  that.setRenderInput(renderInput);

  const proto = {
    that 
  }

  return Object.assign(Object.create(proto), {params})
}

export default choiceQuestionCreator;

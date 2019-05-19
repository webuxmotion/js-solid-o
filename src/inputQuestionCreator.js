import QuestionCreator from './QuestionCreator';

const inputQuestionCreator = (params) => {

  const renderInput = () => {

    const input = `<input type="text">`;

    return input;
  }; 

  const that = new QuestionCreator(params);

  that.setRenderInput(renderInput);

  const proto = {
    that 
  }

  return Object.assign(Object.create(proto), {params})
}

export default inputQuestionCreator;

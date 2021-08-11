const validateAction = action => {
  if(!action || typeof action !== 'object' || Array.isArray(action)) throw new Error('Action must be an object!');

  if(typeof action.type === 'undefined') throw new Error('Action must be a type!');
};

export default validateAction;

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { analyzeSentiment } from './js/sentimentHandler'
import { addToDom } from './js/resultsHandler'
import { formatAnalysis } from './js/formatHandler'

import { getAnalysis } from './js/analysisHandler'
import { postData } from './js/postData'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/_page.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/table.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmit,
    analyzeSentiment,
    addToDom,
    formatAnalysis,
    getAnalysis,
    postData
   }


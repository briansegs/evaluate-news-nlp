import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { getSentiment } from './js/sentimentHandler'
import { addResult } from './js/resultsHandler'
import { formatAnalysis } from './js/formatHandler'
import { createTable } from './js/tableCreater'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmit,
    getSentiment,
    addResult,
    formatAnalysis,
    createTable
   }


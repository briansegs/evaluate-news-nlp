import { analyzeSentiment } from './js/sentimentHandler'
import { addToDom } from './js/tableCreator'
import { formatAnalysis } from './js/formatHandler'
import { getAnalysis } from './js/analysisHandler'
import { postData } from './js/dataHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/_page.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/table.scss'

alert("Welcome! Write a sentence and find out how negitive or positive it is.")

export {
    analyzeSentiment,
    addToDom,
    formatAnalysis,
    getAnalysis,
    postData
   }


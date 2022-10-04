import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import JSON5 from 'json5'

import {
  coordinatesExample,
  highlightsExample,
  experienceExample,
  educationExample,
  certificationsExample,
} from '../../../content/examples';

const ExampleEditor = (valueObject) => <CodeMirror
            value={JSON5.stringify(valueObject, null, 2)}
            extensions={[javascript()]}
            editable={false}
          />
export const CoordinatesExampleEditor = () => ExampleEditor(coordinatesExample)
export const HighlightsExampleEditor = () => ExampleEditor(highlightsExample)
export const ExperienceExampleEditor = () => ExampleEditor(experienceExample)
export const EducationExampleEditor = () => ExampleEditor(educationExample)
export const CertificationsExampleEditor = () => ExampleEditor(certificationsExample)
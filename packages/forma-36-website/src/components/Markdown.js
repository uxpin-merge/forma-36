import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  Heading,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paragraph
} from '@contentful/forma-36-react-components';


const MarkdownToHtml = ({children}) => {
  const mapHeadings = () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    let result = {};
    headings.forEach(headingType => {
      result[headingType] = {
        component: Heading,
        props: {
          element: headingType
        }
      }
    })
    return result;
  }
  const overrides = {
    table: {
      component: Table,
      props: {
        className: 'f36-margin-bottom--l'
      }
    },
    thead: {
      component: TableHead
    },
    tr: {
      component: TableRow
    },
    tbody: {
      component: TableBody
    },
    td: {
      component: TableCell
    },
    th: {
      component: TableCell
    },
    p: {
      component: Paragraph
    },
    ...mapHeadings(),
  }

  return (
    <Markdown options={{overrides}}>
      {children}
    </Markdown>
    )
  }
  
  export default MarkdownToHtml;
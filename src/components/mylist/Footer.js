import React from 'react'

const styles = {
  link: { 
    cursor: 'pointer', 
    textDecoration: 'underline', 
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = (current, item, setFilter) => {
  if (current === item)
    return <span>{item}</span>
  else 
    return <span style={styles.link} onClick={() => setFilter(item)}>{item}</span>
}

const Footer = ({ filter, setFilter }) => (
  <div>
    {
      ['All', 'Active', 'In Cart'].map( f => filterLink(filter, f, setFilter))
    }
  </div>
)

export default Footer;
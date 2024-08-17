// Write your JS code here
import './index.css'
const BlogItem = props => {
  const {eachList} = props
  const {id, title, description, publishedDate} = eachList

  return (
    <div style={{borderBottom:"2px solid #9aa5b1"}}>
      <div className="title-and-date">
        <h1 className="list-title">{title}</h1>
        <p className="list-date">{publishedDate}</p>
      </div>
      <p className="list-description">{description}</p>
    </div>
  )
}

export default BlogItem

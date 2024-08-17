// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div style={{width:"90%"}}>
      {blogsList.map(eachList => (
        <BlogItem eachList={eachList} key={eachList.id} />
      ))}
    </div>
  )
}
export default BlogList

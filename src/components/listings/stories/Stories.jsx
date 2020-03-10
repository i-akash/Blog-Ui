import React, { Component } from 'react'
import {Pagination} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {getStoriesPagination} from '../../../redux/actions/StoriesAction'
// components
import StoryContainer from '../../common/story_container/StoryContainer'
import StoryPlaceHolder from '../../common/placeholder/StoryPlaceHolder'


class Stories extends Component {
    
    state={
        stories:[],
        total:0,
        totalPage:1,
        pageSize:5,
        totalStories:0
    }

    requestStories=(skip,top)=>{
        this.props.getStoriesPagination(skip,top).then(response=>{
            const {stories,total}=response.payload;
            this.handlePageCount(total);
            this.setState({stories,totalStories:total})
        })
    }

    componentWillMount=()=>{
        const {pageSize}=this.state
        this.requestStories(0,pageSize);
        
    }

    handlePageCount=(totalStories)=>{
        const {pageSize}=this.state
        let totalPage=Math.ceil(totalStories/pageSize);
        this.setState({totalPage});
    }

    onPageChange=(e,{activePage})=>{
        let prevPage=activePage-1;
        const {pageSize}=this.state
        this.requestStories(prevPage*pageSize,pageSize);
    }
    render() {
        const {stories,totalPage}=this.state

        return (
            <div>
                {
                    !!stories.length===true ?  stories.map((story,index)=><StoryContainer key={index} readMore={true} story={story}/>)
                    :
                    <StoryPlaceHolder number={3}/>
                }
                <Pagination
                    inverted
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={totalPage}
                    onPageChange={this.onPageChange}
                />
            </div>
        )
    }
}

export default  connect(null,{getStoriesPagination})(Stories);
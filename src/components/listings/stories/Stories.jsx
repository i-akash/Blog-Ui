import React, { Component } from 'react'
import {Pagination} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {getStoriesPagination,getStoriesPaginationQuery} from '../../../redux/actions/StoriesAction'
// components
import StoryContainer from '../../common/story_container/StoryContainer'
import StoryPlaceHolder from '../../common/placeholder/StoryPlaceHolder'
import SimpleSearch from '../../common/search/SimpleSearch'




class Stories extends Component {
    
    state={
        stories:[],
        total:0,
        totalPage:1,
        pageSize:10,
        totalStories:0,
        query:"",

        requested:false
    }

    requestStories=(skip,top)=>{
        this.props.getStoriesPagination(skip,top)
        this.setState({requested:true})
    }

    requestStoriesQuery=(skip,top,query)=>{
        this.props.getStoriesPaginationQuery(skip,top,query)
        this.setState({requested:true})
    }


    componentWillMount=()=>{
        const {pageSize}=this.state
        this.requestStories(0,pageSize);
        
    }

    componentWillReceiveProps=(nextProps)=>{
        const {stories,total}=nextProps.storiesObject
        if(!!stories===true && stories!==this.state.stories){
            this.setState({stories,totalStories:total})
            this.handlePageCount(total)
        }
    }


    handlePageCount=(totalStories)=>{
        const {pageSize}=this.state
        let totalPage=Math.ceil(totalStories/pageSize);
        this.setState({totalPage});
    }

    onPageChange=(e,{activePage})=>{
        let prevPage=activePage-1;
        const {pageSize,query}=this.state
        if(!!query==true)
            this.requestStoriesQuery(prevPage*pageSize,pageSize,query)
        else 
            this.requestStories(prevPage*pageSize,pageSize);
    }

    onSearchChange = (event) => {
        let value=event.target.value
        value=value.trim()

        this.setState({query:value})
        const {pageSize}=this.state

        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
                this.setState({isLoading:true})
                this.requestStoriesQuery(0,pageSize,value)
        },1000);
    }

    render() {
        const {stories,totalPage,requested}=this.state

        return (
            <div>
               <SimpleSearch onChange={this.onSearchChange}/>
                {
                    !!stories.length===true || requested  ?  stories.map((story,index)=><StoryContainer key={index} readMore={true} story={story}/>)
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

const mapStateToProps=state=>({
    storiesObject:state.Stories
})

export default  connect(mapStateToProps,{getStoriesPagination,getStoriesPaginationQuery})(Stories);
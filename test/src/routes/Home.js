import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from '../component/Nav';
import Banner from '../component/Banner';
import Tab from '../component/Tab';
import Course from '../component/Course';
import {queryBanner} from '../api/course'
import action from '../store/action/index';
import './Home.less';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }

    async componentWillMount() {
        /*banner*/
        let result = await queryBanner();
        this.setState({
            bannerData: result
        });
        /*
        axios.defaults.baseURL = 'http://localhost:1234';
        let result = await axios.get('/course/banner');
        this.setState({
            bannerData: result.data
        })
        */
        /*
        //函数前面需要加async
        result = await axios.get('/course/list',{
            params:{
                type:'vue'
            }
        });
        */
        /*axios.post('/add',{
            a:12,
            b:13
        });
        // 'add'请求主体 {a:12,b:13}*/

        /*course*/
        let {courseData, getCourse} = this.props;
        if (courseData && courseData.length === 0) {
            //redux容器中还没有存放数据，此时，我们派发一个任务获取数据然后存储到redux容器中，
            getCourse();
        }
    }

    render() {
        let {courseData} = this.props;
        return <div>
            <section className="navContainer">
                {/*Nav*/}
                <Nav/>
            </section>
            <section className="container">
                {/*Banner*/}
                <Banner data={this.state.bannerData} initSlide={1} auto={1000} style={{height: '1.7rem'}}/>
                {/*course*/}
                {
                    courseData && courseData.length > 0 ? (<div className="kechengBox">
                        <h3><i className="iconfont icon-wode_kecheng"></i>全部课程</h3>
                        <ul>
                            {
                                courseData.map((item, index) =>
                                    (
                                        <Course flag='list' data={item} key={index}/>
                                    ))
                            }
                        </ul>
                    </div>) : null
                }
            </section>
            <section className="footerContainer">
                {/*Tab*/}
                <Tab/>
            </section>
        </div>
    }
}

export default connect(state => ({...state.course}), action.course)(Home);


/*
* 除了JSONP可以实现跨域，还可以基于CORS
* cross -origin resource sharing(cors)
* 实现跨域资源共享，现在项目中使用最多的是CORS
* 服务器端把允许访问的源进行设置，让客户端基于ajax可以进行跨域访问即可
*/

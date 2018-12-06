import React from "react"
import { Breadcrumb, Icon, Row, Col, Skeleton, Card,Button} from "antd"
import OrganizationMenu from "./../organizationMenu"
import "./index.css"

export default class Welcome extends React.Component {
    state = {
        loading: false
    }

    handleLoaded = () => {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div>
                {/* <Button onClick={this.handleLoaded}>show</Button> */}
                <Skeleton loading={this.state.loading} active={true}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Icon type="user" />
                            <span>主页</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                    <h4 style={{ marginBottom: "10px" }}>视频标题</h4>

                    <Row>
                        <Col lg={{ span: 12 }} xs={{ span: 22 }}>
                            {/* <iframe title="welcomeVideo" allowFullScreen={false} framespacing="0" frameBorder="no" border="0" scrolling="no" src="//player.bilibili.com/player.html?aid=10445700&cid=17249672&page=1" style={{ height: "300px", width: "100%", boxShadow: "0px 0px 20px #ccc" }}> </iframe> */}
                        </Col>
                        <Col lg={{ span: 8, offset: 2 }} xs={{ offset: 2, span: 20 }}>
                            <h2>网络管理委员会</h2>
                            <p>
                                电子科技大学学生宿舍网络管理委员会（即网管会,英文全称NetUnion,简称NU）,原名网盟。致力于维护电子科技大学沙河校区学生宿舍网络的正常使用.
                            </p>
                            <p>
                                我们可以提供:
                            </p>
                            <p>
                                1.为您提供全面的网络知识的学习方法和资料
                            </p>
                            <p>
                                2.为您营造适宜的工作环境和浓厚的学习氛围
                            </p>
                            <p>
                                3.为您共同探讨最前沿的网络技术和学习心得
                            </p>
                            <p>
                                4.为您提供全真网络环境下各种设备实践机会
                            </p>

                        </Col>
                    </Row>
                    <br />
                    <h2>组织架构</h2>
                    <hr />
                    <Row>
                        <Col lg={{ span: 11, offset: 1 }} xs={{ offset: 0 }}>
                            <OrganizationMenu></OrganizationMenu>
                        </Col>
                        <Col lg={{offset:4,span:6}}>
                        <br/>
                        <br/>
                        <br/>
                        <h2>
                            <Icon type="user-add" />&nbsp;<a className="joinUsATag" href="https://nixinyudada.github.io/netunion_web/#/joinUs">加入我们>>></a>
                            </h2>
                        </Col>
                    </Row>
                    <br />
                    <h2>牛人介绍</h2>
                    <hr />
                    <br/>
                    

                    <Row>
                        <Col className="personInfo" lg={{span:6,offset:1}}>
                        <Card
                            hoverable
                            style={{width:"100%"}}
                            cover={<img alt="example" style={{height:320,margin:0}} src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg" />}
                        >
                            <Card.Meta
                                title="王树根 2013 信软"
                                description="参与众多校内校外项目，中国科学院计算所研究生在读。"
                            />
                        </Card>
                        </Col>
                        <Col className="personInfo" lg={{span:6,offset:2}}>
                        <Card
                            hoverable
                            style={{width:"100%"}}
                            cover={<img alt="example" style={{height:320,margin:0}} src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg" />}
                        >
                            <Card.Meta
                                title="邢博峰 2014 信软"
                                description="曾于网易有道实习，现在深圳腾讯工作。"
                            />
                        </Card>
                        </Col>
                        <Col className="personInfo" lg={{span:6,offset:2}}>
                        <Card
                            hoverable
                            style={{width:"100%"}}
                            cover={<img alt="example" style={{height:320,margin:0}} src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg" />}
                        >
                            <Card.Meta
                                title="You 2018-2019"
                                description="还有很多大神，但我们相信下一个大神就是你。"
                            />
                        </Card>
                        </Col>
                    </Row>
                </Skeleton>

            </div>
        );
    }
}
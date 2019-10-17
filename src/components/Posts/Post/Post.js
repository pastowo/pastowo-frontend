import React from 'react';
import {
  Card,
  Header,
	Button,
	Row,
	Col,
	Badge,
	ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Post.module.css';

const post = (props) => {
	console.log(props.textLarge);

	let bodyText = props.postData.langv['pl'].body;
		if (!props.extended) {
			bodyText = props.postData.langv['pl'].body.substring(0, 300);
		if(props.postData.langv['pl'].body.length > 300) bodyText += '...';
	}

  return (
  <Card key={"post_"+props.postData.id} bg="dark" className="text-white my-4">
    {
      props.postData.picture ? <Card.Img style={{maxHeight: "30vh"}} variant="top" src={props.postData.picture} /> : null
    }
	  <Card.Header>
			<Row>
				<Col lg="10" md="9">
					<h2>{props.postData.langv['pl'].title}</h2>
				</Col>
				<Col lg="2" md="3">
					<Button style={{width: "50%"}} variant="outline-dark">
						<FontAwesomeIcon icon={['far', 'bookmark']} />
					</Button>
					<Button style={{width: "50%"}} variant="outline-dark">
						<FontAwesomeIcon icon="ellipsis-h" />
					</Button>
				</Col>
			</Row>
	    <Card.Subtitle className="text-muted">
	      Views: {props.postData.views} |
	      Series: <LinkContainer to={"/series/"+props.postData.series.id}><Card.Link>{props.postData.series.dtitle}</Card.Link></LinkContainer> |
	      Added: <time>{props.postData.created_at}</time> by&nbsp;
	      <LinkContainer to={"/user/"+props.postData.author.id}>
	      <Card.Link>{props.postData.author.username}</Card.Link>
	      </LinkContainer>
	    </Card.Subtitle>
	  </Card.Header>
	  <Card.Body className="text-light">
			<div style={{whiteSpace: 'pre-wrap', fontSize: (props.textLarge ? "1.2rem" : "1rem")}}>
				{ bodyText }
			</div>
			{
				props.extended ? null : (
					<LinkContainer to={"/paste/"+props.postData.id}> 
		        <Button variant="outline-primary">Go to paste</Button>
    		  </LinkContainer>
				)
			}
  	</Card.Body>
    <Card.Footer className="text-muted">
			<Row>
				<Col sm>
					<FontAwesomeIcon icon={['fa', 'tags']} /> Tags: <br/>
					{
						props.postData.tags.map(tag => { return (
							<LinkContainer to={"/tag/"+tag.trim()}>
								<Card.Link>
									<Badge variant="secondary">${tag}</Badge>
								</Card.Link>
							</LinkContainer>
						)})
					}
				</Col>
				<Col sm>
					<ProgressBar className={classes.Progressbar}>
						<ProgressBar variant="success" now={props.postData.opinion} />
						<ProgressBar variant="danger" now={100 - props.postData.opinion} />
					</ProgressBar>
					<Row>
						<Button className="mx-auto mt-2" variant="outline-dark">
							<FontAwesomeIcon icon={['far', 'thumbs-up']} /> {props.postData.likes}
						</Button>
						<Button className="mx-auto mt-2" variant="outline-dark">
							<FontAwesomeIcon icon={['far', 'thumbs-down']} /> {props.postData.dislikes}
						</Button>
					</Row>
				</Col>
			</Row>
    </Card.Footer>
  </Card>
  );
}

export default post;
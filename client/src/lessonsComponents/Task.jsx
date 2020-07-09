/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import { Draggable } from 'react-beautiful-dnd';

import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import WarningIcon from '@material-ui/icons/Warning';

const CardTask = styled(Card)({
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px #dadada',
  margin: '6px 0 0 0',
});

const SimpleBadge = withStyles((theme) => ({
  badge: {
    left: 5,
    top: '50%',
    width: 'auto',
  },
}))(Badge);

const GridItem = styled(Grid)({
  padding: '20px 0 0 0',
});

const Handle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-bottom: 3%;
`;

export default class Tasks extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <CardTask
            variant="outlined"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <CardContent>{this.props.task.content}</CardContent>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <GridItem item xs={2} sm={2}>
                  <ArrowUpwardIcon color="primary" fontSize="small" />
                </GridItem>
                <GridItem item xs={2} sm={2}>
                  <SimpleBadge
                    badgeContent={this.props.task.idForComments != '' ? 1 : 0}
                  >
                    <ChatBubbleOutlineIcon color="primary" fontSize="small" />
                  </SimpleBadge>
                </GridItem>

                <GridItem item xs={3} sm={3}>
                  <SimpleBadge
                    badgeContent={this.props.task.idForComments != '' ? 1 : 0}
                  >
                    <WarningIcon style={{ color: 'orange' }} fontSize="small" />
                  </SimpleBadge>
                </GridItem>
                <GridItem item xs={3} sm={3}>
                  {this.props.task.deadlineTime} д
                </GridItem>
                <Grid item xs={2} sm={2}>
                  <Handle />
                </Grid>
              </Grid>
            </CardContent>
          </CardTask>
        )}
      </Draggable>
    );
  }
}

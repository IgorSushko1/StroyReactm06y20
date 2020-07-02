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
import clsx from 'clsx';

const CardTask = styled(Card)({
  backgroundColor: `${(props) => (props.isDragging ? 'lightgreen' : 'white')}`,
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
        {(provided, snapshot) => (
          <CardTask
            variant="outlined"
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <CardContent>{this.props.task.content}</CardContent>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <GridItem item xs={6} sm={2}>
                  <ArrowUpwardIcon color="primary" fontSize="small" />
                </GridItem>
                <GridItem item xs={6} sm={2}>
                  <SimpleBadge badgeContent={1}>
                    <ChatBubbleOutlineIcon color="secondary" fontSize="small" />
                  </SimpleBadge>
                </GridItem>

                <GridItem item xs={7} sm={3}>
                  <WarningIcon color="action" fontSize="small" />
                </GridItem>
                <GridItem item xs={6} sm={3}>
                  12 д
                </GridItem>
                <Grid item xs={6} sm={2}>
                  <Handle {...provided.dragHandleProps} />
                </Grid>
              </Grid>
            </CardContent>
          </CardTask>
        )}
      </Draggable>
    );
  }
}

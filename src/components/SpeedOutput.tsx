import React from 'react'
import { Group, Stack, Text } from '@mantine/core';

interface ISpeedOutputProps {
  currentSpeed: number
  active1Board: boolean;
  active2Board:boolean
}

export const SpeedOutput: React.FC<ISpeedOutputProps> = (props) => {
  //Render
  return (
    <Stack py={40}>
      <Text size={24} align={'center'}>Результаты</Text>
      <Stack>
        <Stack align={'center'}>
          <Text size={'lg'}>Скорость на табло:</Text>
          <Group>
            <Text style={{fontFamily:'DSEG7', fontSize: 50}}>{props.currentSpeed ? props.currentSpeed : '!!'}</Text>
            <Text>км/ч</Text>
          </Group>
        </Stack>
        <Stack py={8} align={'center'}>
          <Text align={'center'} size={'xl'}>Табло 1 (60 км/ч):</Text>
          <Group style={{height: 60}}>
            {props.active1Board &&
              <Group>
                <Text style={{fontFamily:'DSEG14', fontSize: 50}}>HIGH SPEED</Text>
              </Group>
            }
          </Group>
        </Stack>
        <Stack py={8}  align={'center'}>
          <Text align={'center'} size={'xl'}>Табло 2 (80 км/ч):</Text>
          <Group style={{height: 60}}>
          {props.active2Board &&
            <Group>
              <Text style={{fontFamily:'DSEG14', fontSize: 50}}>Very high speed</Text>
            </Group>
          }
          </Group>
        </Stack>
      </Stack>
    </Stack>
  )


}
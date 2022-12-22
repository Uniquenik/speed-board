import React, { useState } from 'react';
import { Button, Group, NumberInput, Stepper, Text } from '@mantine/core';

interface ISpeedInputProps {
  activeStep: number;
  setActiveData: (speedArray: number[] | undefined, index: number) => void
}

export const SpeedInput: React.FC<ISpeedInputProps> = (props) => {
  const {activeStep, setActiveData} = props;

  const [lines, setLines] = useState<number[]>([0,0,0])
  const [showError, setShowError] = useState(false)

  const steps = [1,2,3,4,5,6,7,8,9,10]

  //Handles
  const checkValues = () => {
    return lines.some(item => item < 0 || item > 18)
  }
  const handleNextStep = () => {
    if (checkValues()) {
      setShowError(true)
    } else {
      setActiveData(lines, activeStep)
      setShowError(false)
    }
  }

  const randomInput = () => {
    setLines(lines.map(() => Math.random() * 18))
  }

  const clearInput = () => {
    setLines([0,0,0])
  }
  const handleSetValue = (newValue: number | undefined, index: number) => {
    const values = lines

    if (values) {
      values[index] = newValue || 0;
    }

    setLines(values)
  }

  //Render
  return (
    <div>
      <Text py={30} size={24} align={'center'}>Заполните данные с датчиков</Text>
      <Stepper active={activeStep}>
        {steps.map((item, index) => (
          <Stepper.Step key={index}>
            <Group pt={20} pb={10} position="center">
              <NumberInput value={lines?.[0]} precision={2} onChange={(newValue) => handleSetValue(newValue, 0)}/>
              <Text>В</Text>
              <NumberInput value={lines?.[1]} precision={2} onChange={(newValue) => handleSetValue(newValue, 1)}/>
              <Text>В</Text>
              <NumberInput value={lines?.[2]} precision={2} onChange={(newValue) => handleSetValue(newValue, 2)}/>
              <Text>В</Text>
            </Group>
            <Text pt={10} align={'center'}>0..18В to 0..100 мс</Text>
            {showError && <Text size={'xl'} color={'red'} align={'center'}>Некорректные значения с датчика/ов</Text>}
          </Stepper.Step>
        ))}
      </Stepper>
      <Group position="center" mt="xl">
        <Button color={'gray'} onClick={clearInput}>Очистить</Button>
        <Button color={'gray'} onClick={randomInput}>Случайные значения</Button>
        <Button color={activeStep === 10 ? 'gray' : 'blue'} onClick={handleNextStep}>{activeStep === 10 ? "Начать заново" : "Следующий шаг"}</Button>
      </Group>
    </div>
  )


}
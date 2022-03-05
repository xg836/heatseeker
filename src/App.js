import { Collection, Card, Heading, Text, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {

  const snacks = [
    {
      title: "Valentina's",
      description: "A well rounded mexican hot sauce",
      heatRating: 4
    },
    {
      title: "Del Scorcho",
      description: "A tomatoey taco sauce",
      heatRating: 2
    },
    {
      title: "Roberto's Red Sauce",
      description: "A smoky, thin hot sauce",
      heatRating: 5
    }
  ]

  return (
    <View>
    <Collection type="list" items={snacks} gap="1.5rem">
    {(item, index) => (
      <Card key={index} padding="1rem">
        <Heading level={4}>{item.title}</Heading>
        <Text>{item.description}</Text>
      </Card>
    )}
  </Collection>
  </View>
  )
}

export default App
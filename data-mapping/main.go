package main

import (
	comp "mystuff/comparison"
	myfile "mystuff/fileio"
	"os"

	"log"
)

func main() {
	csvFileName := os.Args[1]
	jsonFileName := os.Args[2]

	csvData, err := myfile.ReadCSV(csvFileName)
	if err != nil {
		log.Fatalln("Unable to extract CSV data :: ", err)
	}

	oldJsonData, err := myfile.ReadJSON(jsonFileName)
	if err != nil {
		log.Fatalln("Unable to extract JSON data :: ", err)
	}

	var allNewJsonData []myfile.NewJSONObj
	for _, data := range oldJsonData {
		newJsonData, err := myfile.ConvertOldToNewJsonObj(data)
		if err != nil {
			log.Fatalln("Unable to Convert old to new JSON data :: ", err)
		}

		allNewJsonData = append(allNewJsonData, newJsonData)
	}

	// hmNewJSON := comp.ConvertNewJSONToHashMap(allNewJsonData)
	// hmCSV := comp.ConvertCSVToHashMap(csvData)
	altAllNewJsonData := comp.CalculateClicks(allNewJsonData, csvData)

	log.Println("Diagnostics")
	clickTracker := make(map[int]int, len(altAllNewJsonData))
	var total int
	for _, data := range altAllNewJsonData {
		key := data.Clicks
		val, _ := clickTracker[key]
		val++
		clickTracker[key] = val

		if key > 0 {
			log.Printf("hit :: %d, pageURL :: %s", key, data.PageURL)
		}

		total++
	}

	log.Println("Value :: Number of occurences")
	for key, value := range clickTracker {
		log.Printf("%d :: %d\n", key, value)

	}
	log.Println("TOTAL :: ", total)

	err = myfile.OutputToNewJsonFile(altAllNewJsonData)
	if err != nil {
		log.Fatalln("Unable to output new JSON file :: ", err)
	}
}

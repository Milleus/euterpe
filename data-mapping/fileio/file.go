package myfile

import (
	"encoding/csv"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type CSVObj struct {
	ElementID            string
	ElementClasses       string
	ElementTarget        string
	TargetURL            string
	PageURL              string
	DVCECreatedTimestamp string
}

type OldJSONObj struct {
	Status      interface{} `json:"status"`
	LinkText    string      `json:"link_text"`
	AttrHref    string      `json:"attr_href"`
	IsInternal  bool        `json:"is_internal,omitempty"`
	AttrClass   interface{} `json:"attr_class"`
	AttrTarget  string      `json:"attr_target"`
	ResolvedURL string      `json:"resolved_url,omitempty"`
	AttrID      interface{} `json:"attr_id"`
	PageURL     string      `json:"page_url"`
}

type NewJSONObj struct {
	Clicks int `json:"clicks"`
	OldJSONObj
}

func ReadCSV(filename string) ([]CSVObj, error) {
	csvfile, err := os.Open(filename)
	if err != nil {
		return nil, err
	}

	reader := csv.NewReader(csvfile)
	records, err := reader.ReadAll()
	if err != nil {
		log.Fatalln("[ReadCSV] Failed due to ", err)
		return nil, err
	}
	records = records[1:] // take away the header

	maxRecords := len(records)
	csvObjs := make([]CSVObj, maxRecords)
	csvEmtpyArr := "[]"

	for i, record := range records {
		csvObjs[i].ElementID = record[0]

		if record[1] == csvEmtpyArr {
			csvObjs[i].ElementClasses = ""
		} else {
			csvObjs[i].ElementClasses = record[1]
		}

		csvObjs[i].ElementTarget = record[2]
		if record[2] == csvEmtpyArr {
			csvObjs[i].ElementTarget = ""
		} else {
			csvObjs[i].ElementTarget = record[2]
		}

		csvObjs[i].TargetURL = record[3]
		if record[3] == csvEmtpyArr {
			csvObjs[i].TargetURL = ""
		} else {
			csvObjs[i].TargetURL = record[3]
		}

		csvObjs[i].PageURL = record[4]
		if record[4] == csvEmtpyArr {
			csvObjs[i].PageURL = ""
		} else {
			csvObjs[i].PageURL = record[4]
		}

		csvObjs[i].DVCECreatedTimestamp = record[5]
	}

	return csvObjs, nil
}

func ReadJSON(filename string) ([]OldJSONObj, error) {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var ojo []OldJSONObj
	err = json.Unmarshal(data, &ojo)
	if err != nil {
		return nil, err
	}

	var totalAvoid int
	var cleanData []OldJSONObj
	for _, ojoData := range ojo {
		rawVal := ojoData.Status
		if val, ok := rawVal.(float64); ok {
			if val == http.StatusMovedPermanently { //301
				totalAvoid++
				continue
			}
		}

		cleanData = append(cleanData, ojoData)
	}

	log.Println("TOTAL AVOIDED :: ", totalAvoid)
	return cleanData, nil
}

func ConvertOldToNewJsonObj(old OldJSONObj) (NewJSONObj, error) {
	newJSONObj := NewJSONObj{0, old}

	return newJSONObj, nil
}

func OutputToNewJsonFile(data []NewJSONObj) error {
	rawData, err := json.MarshalIndent(data, "", "")
	if err != nil {
		return err
	}

	filename := "outputWithClicks.json"
	err = ioutil.WriteFile(filename, rawData, 0777)
	if err != nil {
		return err
	}

	return nil
}

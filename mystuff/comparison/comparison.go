package comparison

import (
	myfile "mystuff/fileio"
	"strconv"
)

func ConvertCSVToHashMap(csvObjs []myfile.CSVObj) map[string]myfile.CSVObj {
	hm := make(map[string]myfile.CSVObj, len(csvObjs))
	for _, row := range csvObjs {
		combo := row.ElementID + row.ElementClasses + row.ElementTarget + row.TargetURL + row.PageURL
		// combo := row.ElementID + row.ElementTarget + row.TargetURL + row.PageURL
		hm[combo] = row
	}

	return hm
}

func ConvertNewJSONToHashMap(newJsonObjs []myfile.NewJSONObj) map[string]myfile.NewJSONObj {
	hm := make(map[string]myfile.NewJSONObj, len(newJsonObjs))
	for _, record := range newJsonObjs {
		// attrid can be null
		var attrID string
		if valNumber, ok := record.AttrID.(int); ok {
			attrID = strconv.Itoa(valNumber)
		} else if valStr, ok := record.AttrID.(string); ok {
			attrID = valStr
		}

		var attrClass string
		if valNumber, ok := record.AttrClass.(int); ok {
			attrClass = strconv.Itoa(valNumber)
		} else if valStr, ok := record.AttrClass.(string); ok {
			attrClass = valStr
		}

		combo := attrID + attrClass + record.AttrTarget + record.AttrHref + record.PageURL
		// combo := attrID + record.AttrTarget + record.AttrHref + record.PageURL
		hm[combo] = record
	}

	return hm
}

func CalculateClicks(newJsonObjs []myfile.NewJSONObj, csvObjs []myfile.CSVObj) []myfile.NewJSONObj {
	hmNewJSON := ConvertNewJSONToHashMap(newJsonObjs)

	for _, row := range csvObjs {
		key := row.ElementID + row.ElementClasses + row.ElementTarget + row.TargetURL + row.PageURL
		if value, exist := hmNewJSON[key]; exist {
			value.Clicks++
			hmNewJSON[key] = value
		}
	}

	var altAllNewJSONObjs []myfile.NewJSONObj
	for _, value := range hmNewJSON {
		altAllNewJSONObjs = append(altAllNewJSONObjs, value)
	}

	return altAllNewJSONObjs
}

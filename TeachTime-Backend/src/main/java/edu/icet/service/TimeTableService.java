package edu.icet.service;

import edu.icet.dto.TimeTable;
import edu.icet.entity.TimeTableCompositePkEntity;

import java.util.List;

public interface TimeTableService {
    List<TimeTable> getAll();
    void addGradesToTimeTbl(TimeTable timeTable);
    TimeTable searchGradeById(TimeTableCompositePkEntity timeTblId);
    void deleteGradeById(TimeTableCompositePkEntity timeTblId);
    void UpdateGradeById(TimeTable timeTable);

}

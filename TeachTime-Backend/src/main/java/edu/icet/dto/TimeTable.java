package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TimeTable {
    private Integer teacherId;
    private Integer day;
    private Integer period;
    private String grade;
}

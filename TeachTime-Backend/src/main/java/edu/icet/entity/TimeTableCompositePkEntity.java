package edu.icet.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@Embeddable
@AllArgsConstructor
public class TimeTableCompositePkEntity implements Serializable {
    private Integer teacherId;
    private Integer day;
    private Integer period;
}
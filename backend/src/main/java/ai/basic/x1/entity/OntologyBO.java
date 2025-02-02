package ai.basic.x1.entity;

import ai.basic.x1.entity.enums.DatasetTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author chenchao
 * @date 2022/4/6
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OntologyBO {

    private Long id;

    private String name;

    /**
     * dataset type
     */
    private DatasetTypeEnum type;

    private Boolean isDeleted;

    /**
     * number of class in one ontology
     */
    private Integer classNum;
}
